using System.IO;
namespace LegoHub.Data.Storage
{
    public class StoragePath
    {
        public string AppRootFolderPath { get; set; }
        public string WwwRootFolderPath { get; set; }
        public string StorageFolderPath { get; set; }
        public string FolderSeparator
        {
            get { return Path.DirectorySeparatorChar.ToString(); }
        } //= "\\"; // \ on windows  / on *nix 
    }
}