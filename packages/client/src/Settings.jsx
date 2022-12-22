import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export function Settings({ setSite, setSort }) {
  // Website picker
  // Sort options
  const [isOpen, setIsOpen] = useState(false);
  const [iconClass, setIconClass] = useState('settings-icon');
  const [optionsClass, setOptionsClass] = useState('options');

  const changeSite = (event) => {
    console.log('site: ' + event.target.value);
    setSite(event.target.value);
  };

  const changeSort = (event) => {
    console.log('sort: ' + event.target.value);
    setSort(event.target.value);
  };

  const handleClick = () => {
    isOpen
      ? setIconClass('settings-icon')
      : setIconClass('settings-icon rotate120');
    isOpen ? setOptionsClass('options') : setOptionsClass('options slide-in');
    setIsOpen(!isOpen);
  };

  return (
    <div className="settings">
      <div className={optionsClass}>
        <div className="pick-site">
          <p>Site</p>
          <select onChange={changeSite} disabled={!isOpen}>
            <option value="google">Google</option>
            <option value="se">Stack Exchange</option>
          </select>
        </div>
        <div className="pick-sort">
          <p>Sort By</p>
          <select onChange={changeSort} disabled={!isOpen}>
            <option value="relevancy">Relevancy</option>
            <option value="date">Date</option>
            <option value="starred">Starred</option>
          </select>
        </div>
      </div>
      <div className="icon">
        <FontAwesomeIcon
          icon={faGear}
          className={iconClass}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
