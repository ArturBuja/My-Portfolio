import React, { useState } from 'react';

export const LangContext = React.createContext({
  isEnglish: true,
  changeLang: () => {},
});

const LangContextProvider = props => {
  const [isEnglish, setIsEnglish] = useState(true);

  const languageChangeHandler = () => {
    setIsEnglish(prevState => !prevState);
  };

  return (
    <LangContext.Provider
      value={{ isEnglish, changeLang: languageChangeHandler }}
    >
      {props.children}
    </LangContext.Provider>
  );
};

export default LangContextProvider;
