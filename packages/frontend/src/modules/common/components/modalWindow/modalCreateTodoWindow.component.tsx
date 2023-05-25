import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, useMediaQuery } from '@mui/material';
import { ITodoData } from '../../types/todo.types';
import todoValidationSchema from '../../helpers/todoValidationSchema';
import { CustomTitleComponent } from '../customTitle';
import { MEDIA_KEYS } from '../../consts/app-keys.const';
import useInitialFormValues from '../../../../hooks/useInitialFormValues';
import useCreateTodoMutation from '../../../../hooks/useCreateTodoMutation';
import * as Styled from './modalCreateTodoWindow.styled';

interface CreateTodoProps {
  onCancel: () => void;
}

const ModalCreateTodoWindowComponent: React.FC<CreateTodoProps> = ({ onCancel }) => {
  const isMobileScreen = useMediaQuery(MEDIA_KEYS.mobile);
  const isTabletScreen = useMediaQuery(MEDIA_KEYS.tablet);
  const isDesktopScreen = useMediaQuery(MEDIA_KEYS.desktop);
  const initValues = useInitialFormValues();
  const createTodoMutation = useCreateTodoMutation();
  const handleSubmit = (todo: ITodoData) => {
    createTodoMutation.mutate({
      title: todo.title,
      description: todo.description,
      isCompleted: todo.isCompleted,
      isPrivate: todo.isPrivate
    });
    onCancel();
  };

  return (
    <>
      {isDesktopScreen && (
        <Styled.ModalWrapper>
          <Styled.ModalContent>
            <CustomTitleComponent title="Create Todo" />
            <Formik
              initialValues={initValues}
              validationSchema={todoValidationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Styled.ModalFormElementWrapper>
                  <Styled.ModalLabelMobile htmlFor="title">Title:</Styled.ModalLabelMobile>
                  <Field id="title" name="title" placeholder="Title" />
                  <ErrorMessage name="title" component="span" className="form-input-error" />
                </Styled.ModalFormElementWrapper>
                <Styled.ModalFormElementWrapper>
                  <Styled.ModalLabel htmlFor="description">Description:</Styled.ModalLabel>
                  <Field id="description" name="description" placeholder="Description" />
                  <ErrorMessage name="description" component="span" className="form-input-error" />
                </Styled.ModalFormElementWrapper>
                <Styled.ModalFormElementWrapper>
                  <Styled.ModalLabel htmlFor="isPrivate">Private:</Styled.ModalLabel>
                  <Field type="checkbox" name="isPrivate" className="checkbox" />
                </Styled.ModalFormElementWrapper>
                <Button type="submit">Create</Button>
                <Button onClick={onCancel} type="button">
                  Cancel
                </Button>
              </Form>
            </Formik>
          </Styled.ModalContent>
        </Styled.ModalWrapper>
      )}

      {isMobileScreen && (
        <Styled.ModalWrapperMobile>
          <Styled.ModalContent>
            <CustomTitleComponent title="Create Todo" />
            <Formik
              initialValues={initValues}
              validationSchema={todoValidationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Styled.ModalFormElementWrapperMobile>
                  <Styled.ModalLabel htmlFor="title">Title:</Styled.ModalLabel>
                  <Field
                    id="title"
                    name="title"
                    placeholder="Title"
                    className="modal-input-mobile"
                  />
                  <ErrorMessage name="title" component="div" className="form-input-error" />
                </Styled.ModalFormElementWrapperMobile>
                <Styled.ModalFormElementWrapperMobile>
                  <Styled.ModalLabel htmlFor="description">Description:</Styled.ModalLabel>
                  <Field
                    id="description"
                    name="description"
                    placeholder="Description"
                    className="form-input-mobile"
                  />
                  <ErrorMessage name="description" component="div" className="form-input-error" />
                </Styled.ModalFormElementWrapperMobile>
                <Styled.ModalFormElementWrapperMobile>
                  <div style={{ display: 'flex' }}>
                    <Styled.ModalLabel htmlFor="isPrivate">Private:</Styled.ModalLabel>
                    <Field type="checkbox" name="isPrivate" className="checkbox" />
                  </div>
                </Styled.ModalFormElementWrapperMobile>
                <Button type="submit">Create</Button>
                <Button onClick={onCancel} type="button">
                  Cancel
                </Button>
              </Form>
            </Formik>
          </Styled.ModalContent>
        </Styled.ModalWrapperMobile>
      )}

      {isTabletScreen && (
        <Styled.ModalWrapperMobile>
          <Styled.ModalContent>
            <CustomTitleComponent title="Create Todo" />
            <Formik
              initialValues={initValues}
              validationSchema={todoValidationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Styled.ModalFormElementWrapperTablet>
                  <Styled.ModalLabelTablet htmlFor="title">Title:</Styled.ModalLabelTablet>
                  <Field
                    id="title"
                    name="title"
                    placeholder="Title"
                    className="modal-input-mobile"
                  />
                  <ErrorMessage name="title" component="div" className="form-input-error" />
                </Styled.ModalFormElementWrapperTablet>
                <Styled.ModalFormElementWrapperTablet>
                  <Styled.ModalLabelTablet htmlFor="description">
                    Description:
                  </Styled.ModalLabelTablet>
                  <Field
                    id="description"
                    name="description"
                    placeholder="Description"
                    className="form-input-mobile"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="form-input-error-tablet"
                  />
                </Styled.ModalFormElementWrapperTablet>
                <Styled.ModalFormElementWrapperTablet>
                  <div>
                    <Styled.ModalLabel htmlFor="isPrivate">Private:</Styled.ModalLabel>
                    <Field type="checkbox" name="isPrivate" className="checkbox-tablet" />
                  </div>
                </Styled.ModalFormElementWrapperTablet>
                <Button type="submit">Create</Button>
                <Button onClick={onCancel} type="button">
                  Cancel
                </Button>
              </Form>
            </Formik>
          </Styled.ModalContent>
        </Styled.ModalWrapperMobile>
      )}
    </>
  );
};

export default ModalCreateTodoWindowComponent;
