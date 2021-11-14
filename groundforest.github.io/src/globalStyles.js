import styled, { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Futura, sans-serif;
	font-size: 16pt;
}`;

export const Container = styled.div`
display: ${({ display }) => (display ? display: '')};
flex-direction: column;
overflow: ${({overflow}) => (overflow ? overflow: '')}; 
width: 100%;
max-width: 100%;
height: ${({ height }) => ( height ? height: '970px')};
`;

export const PageButton = styled.button`
    display:flex;
	background-color: #ffd387;
    width: 150px;
    height: 40px;
    border: none;
    flex-direction: column;
    border-radius: 12px;
    box-shadow: 0px 3px 3px gray; 
    justify-content:center;
    align-content:center;
    position: relative;
    top: 7%;
    transition: transform  0.7s;

	&.contact{
		display: flex;
		background-color: #ffd387;
		margin-top: 10%;
	}

    &:hover{
        background-color: #ffbe78;
        transform: translateX(0px) translateY(-7px);
    }
	
	span{
		margin-left:auto;
		margin-right:auto;
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	background-color: ${({background}) => (background ? background: '')};
	flex-direction: ${({ Reverse }) => ( Reverse ? 'row-reverse': 'row')};
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	justify-self: ${({alignself}) => (alignself ? alignself: '')}; 
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({background}) => (background ? background: '')};
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	align-self: ${({alignself}) => (alignself ? alignself: '')}; 
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;

