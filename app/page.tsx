import SpeechToText from '@/components/speech-to-text';

const Test = () => {
  const documentUrl =
    'https://zhymzpncibzsfyqxutct.supabase.co/stohggrage/v1/object/sign/files/pdfs/f30ffb4e-e884-4a73-b5a8-9b6af4d035e5/Atrocities Human.docx?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9wZGZzL2YzMGZmYjRlLWU4ODQtNGE3My1iNWE4LTliNmFmNGQwMzVlNS9BdHJvY2l0aWVzIEh1bWFuLmRvY3giLCJpYXQiOjE3Mzc0NDEwNzEsImV4cCI6MjczNzQ0MTA3OH0.oAYW8erBY3uZpLmNoDWTmQDTwbQAdiHTX8zG8AwzQzQ';
  const doddcumentUrl =
    'https://zhymzpncibzsfyqxutct.supabase.co/stohggrage/v1/object/sign/files/pdfs/f30ffb4e-e884-4a73-b5a8-9b6af4d035e5/Atrocities Human.docx?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9wZGZzL2YzMGZmYjRlLWU4ODQtNGE3My1iNWE4LTliNmFmNGQwMzVlNS9BdHJvY2l0aWVzIEh1bWFuLmRvY3giLCJpYXQiOjE3Mzc0NDEwNzEsImV4cCI6MjczNzQ0MTA3OH0.oAYW8erBY3uZpLmNoDWTmQDTwbQAdiHTX8zG8AwzQzQ';

  const nochange = 'sorry';
  const nocsdshange = 'sorry';

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
      <SpeechToText />
    </>
  );
};

export default Test;
