export default function RollingLabel({ text }: { text: string }) {
  return (
    <span className="inline-block min-w-0 overflow-hidden align-top [clip-path:inset(0)]">
      <span className="relative block motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out motion-safe:group-hover/roll:-translate-y-full motion-safe:group-focus-visible/roll:-translate-y-full">
        <span className="block py-[.12em]">{text}</span>
        <span aria-hidden="true" className="absolute inset-x-0 top-full block py-[.12em]">{text}</span>
      </span>
    </span>
  );
}
