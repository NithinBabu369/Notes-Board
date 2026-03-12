import Note from "../models/Note.js";

export async function getNotes(_, res) {
    try {
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getNotes controlller", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if(!note){res.status(404).json({message: "Note not found"})};
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNotes controlller", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function createNotes(req, res){
    try {
        const {title,content} = req.body;
        const newNote = new Note({title,content});
        const savedNote = await newNote.save();
        res.status(201).json({savedNote});
    } catch (error) {
        console.log("Error in CreateNotes controller", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export async function  updateNotes(req, res){
    try {
        const {title,content} = req.body;
        const newNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});
        if(!newNote){res.status(404).json({message:"No such note found to update"})};
        res.status(200).json({message: "Note updated successfully"});
    } catch (error) {
        console.log("Error in updateNote controller",error);
        res.status(500).json({message: "Internal server error"});
    }
};

export async function deleteNotes(req, res){
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id, {new: true});
        if(!deleteNote){res.status(404).json({message:"No such note found to delete"})};
        res.status(200).json({message: "Note deleted successfully"});
    } catch (error) {
        console.log("Error in deleteNote controller",error);
        res.status(500).json({message: "Internal server error"});
    }
};