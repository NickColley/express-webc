const WebCEngine = async (filePath, options, callback) => {
  try {
    const { WebC } = await import("@11ty/webc");
    let page = new WebC();

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
