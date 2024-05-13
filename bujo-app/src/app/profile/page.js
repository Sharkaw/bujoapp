import Image from "next/image";
import profile from "../components/layout/profile.png";
import "../components/layout/styles.css";
import { BaseButton } from "../components/common/BaseButton";

export default function Profile() {
    return (
        <div>
            <h1 className="mt-8">Personal info</h1>
            <p className="p-1 m-1 inline-block align-baseline font-bold text-sm">
                Email: 
            </p>
            <p className="p-1 m-1 inline-block align-baseline font-bold text-sm">
                Password: 
            </p>
            <BaseButton title="Change password" variant="success" type="submit" />
            <div className="flex-end m-1 p-1">
                <Image
                    src={profile}
                    alt="Profile"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
                <p className="p-1 m-1 inline-block align-baseline font-bold text-sm">
                Username
                </p>
                <BaseButton title="Edit photo" variant="success" type="submit" />
                <BaseButton title="Save profile" variant="success" type="submit" />
                <BaseButton title="Delete profile" variant="success" type="submit" />
            </div>
        </div>
    );
}
