import React from 'react';

const DisplayGlossary = ({ termsAndDefinitions }) => {

  return (
    <div className="glossaryContainer">
      <h4> Glossary List Component </h4>
      <ul>
        { termsAndDefinitions.map((termAndDef) => {
          return (
            <li>
              { termAndDef }
            </li>
          )
        })}
      </ul>
    </div>);
}

export default DisplayGlossary;