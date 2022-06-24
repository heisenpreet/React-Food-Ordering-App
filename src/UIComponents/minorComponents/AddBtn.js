const AddBtn = (props) => {
  return (
    <button onClick={props.onRemove}>
      <image
        src={"../../assets/add_FILL0_wght400_GRAD0_opsz48.svg"}
        class="h-6 w-6"
      ></image>
    </button>
  );
};
export default AddBtn;
