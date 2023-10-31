export default function AddClothesDialog() {
  //Add proptype validation

  function closeDialog() {
    const dialog = document.querySelector(".new-item-dialog");
    dialog.close();
  }

  return (
    <>
      <dialog open className="new-item-dialog">
        <button onClick={closeDialog}>x</button>
      </dialog>
    </>
  );
}
