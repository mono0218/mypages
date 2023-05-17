import {Text,Image,Spacer} from "@nextui-org/react";
import styles from "styles/main.module.css"

export default function main() {
    return (
            <div　className={styles.all}>
                <Image width={640} height={360}   src={"/img_1.png"} />
                <div>
                    <Text h1>Muranaka Hiroyoshi</Text>
                    <Spacer y={3}/>
                    <Text　h2>所属：S高等学校　第一学年<br/>主な実績：SecHack365　採択・修了<br/><br/>アプリケーションPAMSを開発・リリース</Text>
                </div>
            </div>
    );
}