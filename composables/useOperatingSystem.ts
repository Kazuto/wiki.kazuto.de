async function checkOS(...os: string[]): Promise<boolean> {
  // @ts-ignore
  if (navigator.userAgentData) {
    // @ts-ignore
    const { platform } = await navigator.userAgentData.getHighEntropyValues([
      'platform',
    ]);

    return os.some((os) => platform.toLowerCase().includes(os.toLowerCase()));
  } else {
    return os.some((os) =>
      navigator.userAgent.toLowerCase().includes(os.toLowerCase())
    );
  }
}

const isMac = () => {
  return checkOS('macOS', 'macintosh');
};

export default () => {
  return {
    isMac,
  };
};
