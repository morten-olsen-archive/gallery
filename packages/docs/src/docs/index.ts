const files = (require as any).context("./", true, /.*\.doc\.ts/);

const keys = files.keys();
const docs = keys.map((key: string) => {
  const module = files(key);

  return {
    path: key,
    title: module.title,
    component: module.default,
  };
});

export default docs;
