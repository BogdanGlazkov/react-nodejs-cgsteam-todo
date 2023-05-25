import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Switch from '@mui/material/Switch';
import { ErrorMessage, Field } from 'formik';
import * as Styled from './detailsDesktop.styled';

export const DetailsDesktop = () => {
  const navigate = useNavigate();
  const goBackHandler = () => navigate(-1);

  return (
    <Styled.DetailsPageFormWrapper>
      <div>
        <Styled.DetailsPageFormTitle>
          Todo title:
          <Field type="text" name="title" className="form-input" />
          <ErrorMessage name="title" component="span" />
        </Styled.DetailsPageFormTitle>
        <Styled.DetailsPageFormDescription>
          Description:
          <Field type="text" name="description" className="form-input" />
          <ErrorMessage name="description" component="span" />
        </Styled.DetailsPageFormDescription>
        <div style={{ width: '10%' }}>
          <Styled.DetailsPageFormSwitchWrapper>
            <span>Completed</span>
            <Field type="checkbox" name="isCompleted" as={Switch} />
          </Styled.DetailsPageFormSwitchWrapper>
          <Styled.DetailsPageFormSwitchWrapper>
            <span>Private</span>
            <Field type="checkbox" name="isPrivate" as={Switch} />
          </Styled.DetailsPageFormSwitchWrapper>
        </div>
      </div>
      <Styled.BtnWrapper>
        <Button type="button" size="large" onClick={goBackHandler}>
          Back
        </Button>
        <Button color="secondary" size="large" type="submit">
          Save changes
        </Button>
      </Styled.BtnWrapper>
    </Styled.DetailsPageFormWrapper>
  );
};
