export default function loading() {
  return (
    <div className="dark:bg:primary absolute inset-x-0 inset-y-0 z-50 flex items-center justify-center bg-background">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
