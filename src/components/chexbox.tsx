export default function chexBox() {
  return (
    <div className="flex items-center gap-[1px] text-black">
      <input
        type="checkbox"
        className="h-[10px]"
        name="remember"
        id="remember"
      />
      <label className="text-[10px]" htmlFor="remember">
        Recordarme
      </label>
    </div>
  );
}
