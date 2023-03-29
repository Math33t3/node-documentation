import fs from "fs";

function renderPage(page, config={}) {

    //components
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
                    .replace("$TAB_TITLE", config.tabTitle || "")
    
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
                    .replace("$FOOTER_YEAR", `© ${new Date().getFullYear()}`);

    
    return navbar + page + footer;
};

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
};

export default {
    renderPage,
    readPage
}