import { Counter } from '@/components/Counter';

const Test = () => {
  const documentUrl =
    'https://zhymzpncibzsfyqxutct.supabase.co/storage/v1/object/sign/files/pdfs/f30ffb4e-e884-4a73-b5a8-9b6af4d035e5/Atrocities Human.docx?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9wZGZzL2YzMGZmYjRlLWU4ODQtNGE3My1iNWE4LTliNmFmNGQwMzVlNS9BdHJvY2l0aWVzIEh1bWFuLmRvY3giLCJpYXQiOjE3Mzc0NDEwNzEsImV4cCI6MjczNzQ0MTA3OH0.oAYW8erBY3uZpLmNoDWTmQDTwbQAdiHTX8zG8AwzQzQ';

  const viewerUr7 = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
    documentUrl,
  )}`;
  const viewerUr7ad = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
    documentUrl,
  )}`;
  const viewerUr7da = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
    documentUrl,
  )}`;

  const nochange = 'sorry';

  return (
    // <iframe
    //   src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
    //     documentUrl,
    //   )}`}
    //   style={{
    //     width: '100vw',
    //     height: '100vh',
    //     border: 'none',
    //   }}
    //   title="Office Document Viewer"
    // />
    <>
      <Counter />
    </>
  );
};

export default Test;
