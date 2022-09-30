const path = require("node:path");

const DEFAULT_COMPONENT_DIRECTORY = "components";

const WebCEngine = async (filePath, options, callback) => {
  try {
    const { WebC } = await import("@11ty/webc");
    let page = new WebC();
    const {
      views,
      ["webc:components"]: components = DEFAULT_COMPONENT_DIRECTORY,
    } = options.settings;

    page.defineComponents(path.join(views, "..", components, "**.webc"));

    page.setInputPath(filePath);

    let { html } = await page.compile();

    callback(null, html);
  } catch (error) {
    callback(error);
  }
};

const __express = WebCEngine;

module.exports = {
  WebCEngine,
  __express,
};
