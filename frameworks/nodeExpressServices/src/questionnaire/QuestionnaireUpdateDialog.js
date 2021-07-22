import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'
import Dialog from './Dialog'
import doFetch from '../network/NetworkUtil'

/**
 * Passt einen bestehenden Questionnaire an.
 * 
 * @param {object} questionnaire Der Questionnaire, der angepasst werden soll
 * @param {function} update Die update Funktion
 */
const QuestionnaireUpdateDialog =  ({ questionnaire }) => {
    
    const config = useSelector(state => state.config, _.isEqual)
    const dispatch = useDispatch()

    const update = questionnaire => {
        dispatch(
            doFetch({
                url: `${ config.url }/${ config.ressource }/${ questionnaire.id }`,
                requestObject: { method: 'PUT', body: JSON.stringify(questionnaire) },
                actionType: 'UPDATE_QUESTIONNAIRES',
                errorText: 'Not found, or update failed.'
            })
        )
    }

    return <Dialog 
        buttonLabel='Edit' 
        title='Edit Questionnaire' 
        actionButtonLabel='Save'
        questionnaire={ questionnaire } 
        actionFn={ update } 
        css='primary' />
}
    

export default QuestionnaireUpdateDialog
