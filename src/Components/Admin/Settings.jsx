import React from 'react'
import styled from 'styled-components'
import Adsettings from './Adsettings'
import Adpersonal from './Adpersonal'
import Adpasswordchange from './Adpasswordchange'

const Settings = () => {
  return (
    <div>
        
        <Contianer>
        <Adsettings />
        <Adpersonal />
        <Adpasswordchange />
        </Contianer>
    </div>
  )
}

export default Settings

const Contianer = styled.div``