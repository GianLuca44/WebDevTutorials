import React from 'react'
import _ from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import Dialog from './Dialog'
import doFetch from '../network/NetworkUtil'

const headers = { headers: { 'Content-Type': 'application/json; charset=utf-8' } }

/**
 * Erzeugt einen Questionnaire.
 * 
 * @param {function} create Die create Function
 */
const QuestionnaireCreateDialog = () => {
    
    const config = useSelector(state => state.config, _.isEqual)
    const dispatch = useDispatch()

    const create = async questionnaire => {
        dispatch(
            doFetch({
                url: `${ config.url }/${ config.ressource }`,
                requestObject: { method: 'POST', body: JSON.stringify(questionnaire), ...headers },
                actionType: 'CREATE_QUESTIONNAIRES',
                errorText: 'Creation failed.'
            })
        )
    }

    return <Dialog 
        buttonLabel='Add Questionnaire' 
        title='Add Questionnaire' 
        actionButtonLabel='Save'
        questionnaire={ { title: '', description: '' } }
        actionFn={ create } 
        css='success' />
}

export default QuestionnaireCreateDialog
