import React, {useCallback, useContext, useState} from 'react';
import DefaultModal from "../Modal/DefaultModal";
import DefaultModalHeader from "../Modal/ModalHeader/DefaultModalHeader";
import DefaultButton from "../Button/DefaultButton";
import {AiFillCloseCircle} from "react-icons/ai";
import DefaultModalContent from "../Modal/ModalContent/DefaultModalContent";
import DefaultModalFooter from "../Modal/ModalFooter/DefaultModalFooter";
import {AppContext} from "../../utils/contexts/appContext";

function UserSteps() {
  const {
    currentStep,
    user,
    nextButtonEnabled,
    previousButtonEnabled,
    setCurrentStep,
    steps,
    setShowModal
  } = useContext(AppContext);
  const [message, setMessage] = useState("");

  const handleMoveNext = useCallback(() => {
    if (currentStep === steps.length - 1) {
      // save data to local storage.
      localStorage.setItem("user", JSON.stringify(user));
      setMessage("User saved to local storage successfully!");
      return;
    }
    setCurrentStep(currentStep + 1);
  }, [currentStep, setMessage, setCurrentStep, user, steps])

  const handleMovePrevious = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep, setCurrentStep])

  const handleModalClose = useCallback(() => {
    setShowModal(false);
  }, [setShowModal])

  return (
    <DefaultModal>
      <DefaultModalHeader>
        <p style={{marginBottom: 0}}>
          User Stepper Modal
        </p>
        <DefaultButton onClick={handleModalClose}>
          <AiFillCloseCircle/>
        </DefaultButton>
      </DefaultModalHeader>
      <DefaultModalContent>
        <>
          {message ? <h4>{message}</h4> : null}
          {steps[currentStep]}
        </>
      </DefaultModalContent>
      <DefaultModalFooter>
        <DefaultButton buttonvariant={'secondary'} onClick={handleModalClose}>
          Close
        </DefaultButton>
        <DefaultButton buttonvariant={'primary'} onClick={handleMovePrevious} disabled={!previousButtonEnabled}>
          Previous
        </DefaultButton>
        <DefaultButton buttonvariant={'primary'} onClick={handleMoveNext} disabled={!nextButtonEnabled}>
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </DefaultButton>
      </DefaultModalFooter>
    </DefaultModal>
  );
}

export default UserSteps;