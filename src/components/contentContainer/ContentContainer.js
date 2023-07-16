import React from 'react'
import "./contentContainer.css"
import MainLockUp from './mainLockUp/MainLockUp';
import Form from './form/Form';

export default function ContentContainer() {
  return <div className="contentContainer">
    <MainLockUp />
    <Form />
  </div>;
}
