import { Children, createContext } from "react"
import React from 'react'
import { useState } from "react"
import { useContext } from "react"

let ThemeContext = React.createContext('false');

export default ThemeContext