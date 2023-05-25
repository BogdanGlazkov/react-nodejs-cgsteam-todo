import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Switch from '@mui/material/Switch';
import { ErrorMessage, Field } from 'formik';
import * as Styled from './detailsMobile.styled';

export const DetailsMobile = () => {
  const navigate = useNavigate();
  const goBackHandler = () => navigate(-1);

  return (
    <Styled.DetailsPageFormWrapperMobile>
      <div style={{ width: '50%' }}>
        <Styled.DetailsPageFormTitle>
          Todo title:
          <Field type="text" name="title" className="form-input-mobile" />
          <ErrorMessage name="title" component="div" className="form-input-error" />
        </Styled.DetailsPageFormTitle>
        <Styled.DetailsPageFormDescription>
          Description:
          <Field type="text" name="description" className="form-input-mobile" />
          <ErrorMessage name="description" component="div" className="form-input-error" />
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
    </Styled.DetailsPageFormWrapperMobile>
  );
};
