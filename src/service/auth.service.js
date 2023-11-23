import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import {
    doc,
    query,
    getDocs,
    getDoc,
    collection,
    setDoc,
} from "firebase/firestore";
import { database } from "../../client";
import { auth } from "../../client";

class authService {
    constructor() {
        this.permissionsCollectionRef = collection(database, "permissions")
    }

    signInGoogle = async () => {
        return new Promise((resolve) => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider).then((userCredential) => {
                if (!userCredential) {
                    signOut(auth);
                } else {
                    getDoc(
                        doc(database, "permissions", userCredential.user.uid)
                    ).then((docSnapshot) => {
                        if (!docSnapshot.exists()) {
                            const fields = {
                                email: userCredential.user.email,
                                photo: userCredential.user.photoURL,
                                name: userCredential.user.displayName,
                                permission: {
                                    dashboard: "false",
                                    admin: "false"
                                },
                            };
                            setDoc(
                                doc(
                                    database,
                                    "permissions",
                                    userCredential.user.uid
                                ),
                                fields
                            );
                        }
                        resolve(userCredential);
                    });
                }
            });
        });
    };
}

const authAccess = new authService();
export default authAccess;