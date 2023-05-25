import React, { useState } from 'react';
import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, useMediaQuery } from '@mui/material';
import { ITodo } from '../../common/types/todo.types';
import {
  TodoComponent,
  TodoListWrapperMobile,
  TodoListWrapperTablet
} from '../../common/components/todo';
import { CustomButtonComponent } from '../../common/components/customButton';
import ModalCreateTodoWindowComponent from '../../common/components/modalWindow/modalCreateTodoWindow.component';
import * as Styled from './todosPage.styled';
import { MEDIA_KEYS } from '../../common/consts/app-keys.const';
import useTodosQuery from '../../../hooks/useTodosQuery';

export const TodosPage = () => {
  const [showModalCreateWindow, setShowModalCreateWindow] = useState(false);
  const { data: todos, status } = useTodosQuery();
  const isMobileScreen = useMediaQuery(MEDIA_KEYS.mobile);
  const isTabletScreen = useMediaQuery(MEDIA_KEYS.tablet);
  const isDesktopScreen = useMediaQuery(MEDIA_KEYS.desktop);

  const onShowModalBtn = () => setShowModalCreateWindow(true);
  const onCancel = () => setShowModalCreateWindow(false);

  return (
    <>
      {isDesktopScreen && (
        <Styled.Wrapper>
          <Styled.TodosList>
            <Styled.TodosTable>
              <thead>
                <tr>
                  <th style={{ width: '5%', maxWidth: '5%' }}>Id</th>
                  <th style={{ width: '30%', maxWidth: '30%' }}>Title</th>
                  <th style={{ width: '45%', maxWidth: '45%' }}>Description</th>
                  <th style={{ width: '10%', maxWidth: '10%' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {status === 'success' &&
                  todos.map((todo: ITodo) => <TodoComponent key={todo.id} {...todo} />)}
              </tbody>
            </Styled.TodosTable>
          </Styled.TodosList>
          <CustomButtonComponent title="Create todo" func={onShowModalBtn} />
          {showModalCreateWindow && <ModalCreateTodoWindowComponent onCancel={onCancel} />}
        </Styled.Wrapper>
      )}

      {isMobileScreen && (
        <Styled.TodosPageMobile>
          <TodoListWrapperMobile>
            {status === 'success' &&
              todos.map((todo: ITodo) => <TodoComponent key={todo.id} {...todo} />)}
          </TodoListWrapperMobile>
          <Button onClick={onShowModalBtn}>Add Todo</Button>
          {showModalCreateWindow && <ModalCreateTodoWindowComponent onCancel={onCancel} />}
        </Styled.TodosPageMobile>
      )}

      {isTabletScreen && (
        <Styled.TodosPageTablet>
          <TodoListWrapperTablet>
            <Swiper effect="cards" grabCursor modules={[EffectCards]} className="mySwiper">
              {status === 'success' &&
                todos.map((todo: ITodo) => (
                  <SwiperSlide key={todo.id}>
                    <TodoComponent {...todo} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </TodoListWrapperTablet>
          <Button onClick={onShowModalBtn}>Add Todo</Button>
          {showModalCreateWindow && <ModalCreateTodoWindowComponent onCancel={onCancel} />}
        </Styled.TodosPageTablet>
      )}
    </>
  );
};
