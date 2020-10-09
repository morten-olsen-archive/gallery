const compile = async (main: string, files: {[name: string]: string}, modules: {[name: string]: any}) => {
  const typescript = await import('typescript');
  const cache: {[name: string]: any} = {};
  const require = (path: string) => {
    if (modules[path]) {
      return modules[path];
    }
    if (cache[path]) {
      return cache[path];
    }
    if (files[path]) {
      const code = files[path];
      const module = { exports: {} } as any;
      const js = typescript.transpileModule(code, {
        compilerOptions: {
          jsx: typescript.JsxEmit.React,
          esModuleInterop: true,
        },
      });
      const compiled = new Function('module', 'exports', 'require', js.outputText);
      compiled(module, module.exports, require);
      cache[path] = module.exports;
      return module.exports;
    }
    throw new Error(`Module ${path} not found`);
  }

  return require(main);
};

export default compile;
