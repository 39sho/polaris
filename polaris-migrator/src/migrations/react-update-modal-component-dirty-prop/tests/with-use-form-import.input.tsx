import React, {useState} from 'react';
// @ts-expect-error
import {Modal, TextContainer} from '@shopify/polaris-internal';
// @ts-expect-error
import {useForm} from '~/shared/utilities/react-form';

export function App() {
  const [dirty, setDirty] = useState(false);
  const {reset, submit} = useForm();
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
