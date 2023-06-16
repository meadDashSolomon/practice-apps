import React, { useEffect } from 'react';

const Glossary = ({ onDisplayGlossary }) => {



  return (
    <div className="glossaryContainer">
      <h4> Glossary List Component </h4>
      <ul>
        { onDisplayGlossary.map((termAndDef) => {
          return (
            <li>
              { termAndDef }
            </li>
          )
        })}
      </ul>
    </div>);
}

export default Glossary;