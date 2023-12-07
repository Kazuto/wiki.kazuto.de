function checkOS(...os: string[]): boolean {
  return os.some((os) =>
    navigator.userAgent.toLowerCase().includes(os.toLowerCase())
  );
}

const isMac = () => {
  return checkOS('macOS', 'macintosh');
};

export default () => {
  return {
    isMac,
  };
};
