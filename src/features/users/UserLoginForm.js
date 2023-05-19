import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button } from 'reactstrap';
import { validateUserLoginForm } from '../../utils/validateUserLoginForm';
import { setCurrentUser, selectCurrentUser } from './userSlice';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import userIcon from '../../app/assets/img/userIcon.jpg';
import { useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';


