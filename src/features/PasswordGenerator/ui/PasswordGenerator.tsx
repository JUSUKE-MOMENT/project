import styles from "./PasswordGenerator.module.scss";

export const PasswordGenerator = () => {
  return (
    <div className={`${styles.contentContainer} flex flex-col gap-10 items-center w-3/5 h-fit m-auto rounded-[10px] px-4 py-4`}>
      <div className="flex flex-col gap-3 items-center">
        <span className="text-4xl font-bold">Generate A Secure Password</span>

        <p className="text-1xl">
          Need strong a string password? Passphrase? You've come to the right
          place.
        </p>
      </div>

      <div className="">

      </div>
    </div>
  );
};
