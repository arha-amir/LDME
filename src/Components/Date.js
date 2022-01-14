import Date from 'sassy-datepicker';

function DatetoDeliver() {
  const onChange = (d) => {
    console.log(d.toString());
  };

  return (
    <DatetoDeliver onChange={onChange} />
  );
}