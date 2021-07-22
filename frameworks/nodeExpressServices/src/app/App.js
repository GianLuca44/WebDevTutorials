import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'

import Header from './Header'
import QuestionnaireContainer from '../questionnaire/QuestionnaireContainer'
import Message from './Message'
import Footer from './Footer'
import doFetch from '../network/NetworkUtil'
import {useSelector, useDispatch} from 'react-redux'
import _ from 'lodash'

/**
 * Die Wurzel der React-App.
 */
const App = () => {

    const config = useSelector(state => state.config, _.isEqual)
    const error = useSelector(state => state.error, _.isEqual)
    const message = useSelector(state => state.message, _.isEqual)
    const dispatch = useDispatch()

    const readConfig = () => {
        dispatch(
            doFetch({
                url: 'application.json',
                actionType: 'CONFIG'
            })
        )
    }

    useEffect(readConfig, [dispatch])

    const renderQuestionnaireContainer = config => 
        config ? <QuestionnaireContainer /> : null

    const renderMessage = () =>
        error ? <Message message={ message } /> : null 

    return <Container>
        <Header title='Flashcard Client with React' subtitle='Version 3' />
        { renderMessage() }
        { renderQuestionnaireContainer(config) }
        <Footer message='@ The FHNW Team' />
    </Container>
}

export default App
