import { TilRequest } from 'apis/api';
import { useCanWriteTilUsingGet, useTilCreateMutation } from 'apis/til';
import { Dialog } from 'components/dialog/Dialog';
import { DialogContent, DialogDescription, DialogTitle } from 'components/dialog/DialogConfirm';
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
      open(
        <Dialog
          message=""
          RenderContent={() => (
            <DialogContent>
              <DialogTitle>오늘은 이미 작성했어요!</DialogTitle>
              <DialogDescription>
                암묵지는 내일 다시 키울 수 있어요. 그동안 키운 나의 암묵지를 보러 가볼까요?
              </DialogDescription>
            </DialogContent>
          )}
          onClose={() => router.replace('/')}
          noCloseButton
        />
      );
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
