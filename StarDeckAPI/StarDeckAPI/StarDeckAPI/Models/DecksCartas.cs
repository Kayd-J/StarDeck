using System;
using System.Collections.Generic;

namespace StarDeckAPI.Models;

public partial class DecksCartas
{
    public string DecksId { get; set; } = null!;

    public string CartasId { get; set; } = null!;

    public virtual Cartas Cartas { get; set; } = null!;

    public virtual Decks Decks{ get; set; } = null!;
}
