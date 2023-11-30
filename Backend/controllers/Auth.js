import DataPegawai from "../models/DataPegawaiModel.js";
import argon2 from "argon2";
import { verifyUser } from "../middleware/AuthUser.js";

export const Login = async (req, res) => {

  res.status(200).json({
    "id_pegawai": 1,
    "nama_pegawai": "Aldi",
    "username": "aldi",
    "hak_akses": "admin",
    "msg": "Login Berhasil"
});
};

export const Me = async (req, res) => {
  
  res.status(200).json({
    "id": 1,
    "nik": "112233",
    "nama_pegawai": "Aldi",
    "username": "aldi",
    "hak_akses": "admin"
});
}

export const LogOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Tidak dapat logout" });
    res.status(200).json({ msg: "Anda Telah Logout" });
  });
}

export const changePassword = async (req, res) => {
  await verifyUser(req, res, () => { });

  const userId = req.userId;

  const user = await DataPegawai.findOne({
    where: {
      id: userId
    }
  });

  const { password, confPassword } = req.body;

  if (password !== confPassword) return res.status(400).json({ msg: "Password dan Konfirmasi Password Tidak Cocok" });

  try {
    const hashPassword = await argon2.hash(password);

    await DataPegawai.update(
      {
        password: hashPassword
      },
      {
        where: {
          id: user.id
        }
      }
    )
    res.status(200).json({ msg: "Password Berhasil di Perbarui" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};