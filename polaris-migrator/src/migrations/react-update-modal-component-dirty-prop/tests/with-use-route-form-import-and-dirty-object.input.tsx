import React from 'react';
// @ts-expect-error
import {Modal, TextContainer} from '@shopify/polaris-internal';

// @ts-expect-error
import {useRouteForm} from '~/shared/utilities/forms/useRouteForm';

export function App() {
  const {reset, dirty, submit} = useRouteForm();
  return (
    <Modal
      open={false}
      onClose={() => {}}
      title="Title"
      primaryAction={{
        content: 'Save',
        onAction: submit,
      }}
      secondaryActions={[
        {
          content: 'Cancel',
          onAction: reset,
        },
      ]}
    >
      <Modal.Section>
        <TextContainer>Lorem ipsum</TextContainer>
      </Modal.Section>
    </Modal>
  );
}
