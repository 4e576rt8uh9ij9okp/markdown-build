const {writeFile, readFile, readdir, stat} = require('fs').promises
const {extname, join} = require('path')
const Marked = require('marked')
const { Eta } = require('eta')

const build = async (path) => {
    const eta = new Eta({ views: join(path, "templates") })

    const getMetadata = (text) => {
        const entries = text.split('\n')
            .filter(x => x !== "")
            .map(x => x.split(': '))
        
        return Object.fromEntries(entries)
    }

    const createPage = async (path) => {
        const text = await readFile(path, {encoding: 'utf-8'})
        const [meta, content] = text.split("-----")

        const body = Marked.parse(content)
        const html = eta.render("./layout", {body, ...getMetadata(meta)})

        const newFileName = path.replace('.md', '.html')
        await writeFile(newFileName, html)
        
        return newFileName
    }

    
    const readIt = async (parent) => {
        const folder = await readdir(parent, { encoding: "utf-8"}) 

        for(let i = 0, l = folder.length; i < l; i++){
            const newEntryPath = join(parent, folder[i])
            const stats = await stat(newEntryPath)

            if(stats.isFile() && extname(folder[i]) === ".md"){
                await createPage(newEntryPath)
            }else if(stats.isDirectory()){
                readIt(newEntryPath)
            }
        }
    }
    
    await readIt( join(path, "www") )

    console.log(`Finished: mdbuild ${path}`);
}

module.exports = build