import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { Box, Button } from "@material-ui/core";
import { styled } from "@mui/material";

interface ModalProps {
  open: boolean;
  hide: () => void;
  children?: JSX.Element | JSX.Element[];
}
const ModalOverlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;
const ModalWrapper = styled(Box)`
  position: fixed;
  top: 200px;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;
const ModalBody = styled(Box)`
  z-index: 100;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`;
const ModalBtn = styled(Button)`
  font-size: 0.9rem;
  font-weight: 700;
  margin:  0 auto 10px auto;
  border: none;
  border-radius: 3px;
  padding: 0.3rem 1rem;
`;
const ModalHeader = styled('div')`
 display: flex;
  align-items: center;
`

const Modal: FunctionComponent<ModalProps> = ({ open, hide, children }) =>
  open
    ? ReactDOM.createPortal(
        <>
          <ModalOverlay />
          <ModalWrapper role="dialog">
            <ModalBody>
              <ModalHeader >
                <h6></h6>
                <ModalBtn onClick={hide}>
                  <span aria-hidden="true">&times; close</span>
                </ModalBtn>
              </ModalHeader>
              {children}
            </ModalBody>
          </ModalWrapper>
        </>,
        document.body
      )
    : null;

export default Modal;
