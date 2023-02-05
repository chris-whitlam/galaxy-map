const LOCAL_STORAGE_NAMESPACE = 'ssm';

function useLocalStorage() {
  const storeValue = (name, value) =>
    localStorage.setItem(
      `${LOCAL_STORAGE_NAMESPACE}/${name}`,
      JSON.stringify(value)
    );

  const getValue = (name) =>
    JSON.parse(localStorage.getItem(`${LOCAL_STORAGE_NAMESPACE}/${name}`));

  return {
    storeValue,
    getValue
  };
}

export default useLocalStorage;
