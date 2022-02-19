import { TilRequest } from 'apis/api';
import { useCanWriteTilUsingGet, useTilCreateMutation } from 'apis/til';
import { Dialog } from 'components/dialog/Dialog';
import { Form } from 'components/Form';
import Header from 'components/layout/Header';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDialogStore } from 'states/dialogStore';
import { PageWrapper } from 'styles/styled';

const NewRecord = () => {
  const { mutateAsync: createTil } = useTilCreateMutation();
  const { data: CanWriteTilUsing } = useCanWriteTilUsingGet();
  const { open } = useDialogStore();
  const router = useRouter();

  useEffect(() => {
    if (CanWriteTilUsing?.data?.isSuccess === false) {
      open(<Dialog message="이미 암묵지를 없앴음" onClose={() => router.replace('/')} />);
    }
  }, [CanWriteTilUsing]);

  return (
    <PageWrapper>
      <Header title="암묵지 쌓기" />
      <Form
        onSubmit={async (tilRequest: TilRequest) => {
          const response = await createTil(tilRequest);
          if (response) {
            router.replace(`/records/${response.id}`);
          }
        }}
      />
    </PageWrapper>
  );
};

export default NewRecord;
