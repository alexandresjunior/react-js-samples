import React, { useState } from "react";
import ClayButton from "@clayui/button";
import ClayModal, { useModal } from "@clayui/modal";
import ClayLink from '@clayui/link';

// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";

const TermsOfUseModal = ({acceptanceToU, setAcceptanceToU}) => {
  const [visible, setVisible] = useState(false);

  const { observer, onClose } = useModal({
    onClose: () => setVisible(false)  
  });

  const onAgreement = () => {
    setAcceptanceToU(true);
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <ClayModal observer={observer} size="lg" status="info">
          <ClayModal.Header className="text-center">Terms of Use</ClayModal.Header>

          <ClayModal.Body className="text-center">
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor lectus et dui aliquet, et volutpat erat consequat. Sed suscipit viverra consectetur. Quisque lacinia convallis orci. Maecenas tristique quam ac eros condimentum mattis. Donec blandit nunc et risus mollis, ut lacinia sapien commodo. Suspendisse eleifend sollicitudin eros ac cursus. Proin accumsan non elit at venenatis."
              }
            </p>
          </ClayModal.Body>

          <ClayModal.Footer
            first={
              <ClayButton.Group spaced>
                <ClayButton displayType="secondary" onClick={onClose}>Close</ClayButton>
              </ClayButton.Group>
            }
            last={<ClayButton onClick={onAgreement}>I agree</ClayButton>}
          />
        </ClayModal>
      )}
      <ClayLink onClick={() => setVisible(true)}>Terms of Use</ClayLink>
    </>
  );
};

export default TermsOfUseModal;