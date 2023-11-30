import DataPegawai from '../models/DataPegawaiModel.js'
let id = "e6be1994-e5c9-471b-8c23-9b2ee6787d86";

export const verifyUser = async(req, res, next) =>{
    console.log("verifys"+req.session.userId)
    if(!id){
        return res.status(401).json({msg: "Mohon Login ke Akun Anda!"});
    }
    try {
        const pegawai = await DataPegawai.findOne({
            where: {
                id_pegawai: id
            }
        });
        if(!pegawai) return res.status(404).json({msg: "User Tidak di Temukan"});
        req.userId = pegawai.id;
        req.hak_akses = pegawai.hak_akses;
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Terjadi Kesalahan Pada Server" });
    }
}

export const adminOnly = async (req, res, next) => {
    try {
        const pegawai = await DataPegawai.findOne({
            where:{
                id_pegawai: id
            }
        });
        if(!pegawai) return res.status(404).json({msg: "Data Pegawai Tidak di Temukan"});
        if(pegawai.hak_akses !== "admin") return res.status(403).json({msg: "Akses terlarang"});
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Terjadi Kesalahan Pada Server" });
    }
}