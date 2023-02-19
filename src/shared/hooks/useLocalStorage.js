const SESSION_STORAGE_NAMESPACE = 'ssm';

function useSessionStorage() {
  const storeValue = (name, value) =>
    sessionStorage.setItem(
      `${SESSION_STORAGE_NAMESPACE}/${name}`,
      JSON.stringify(value)
    );

  const getValue = (name) =>
    JSON.parse(sessionStorage.getItem(`${SESSION_STORAGE_NAMESPACE}/${name}`));

  return {
    storeValue,
    getValue
  };
}

export default useSessionStorage;
