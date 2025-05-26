import React from 'react';
import styled from 'styled-components';
const TodoTemplateBlock = styled.div`
width: 512px;
height: 768px;
position: relative; /* 추후박스하단에추가버튼을위치시키기
위한설정*/
background: white;
border-radius: 16px;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
margin: 0 auto; /* 페이지중앙에나타나도록설정*/
margin-top: 96px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
`;
functionTodoTemplate({ children }); 
{
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}
export default TodoTemplate;