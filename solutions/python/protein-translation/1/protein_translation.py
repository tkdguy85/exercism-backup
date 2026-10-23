def proteins(strand):
    codon_map = {
      'AUG': 'Methionine',
      'UUU': 'Phenylalanine',
      'UUC': 'Phenylalanine',
      'UUA': 'Leucine',
      'UUG': 'Leucine',
      'UCU': 'Serine',
      'UCC': 'Serine',
      'UCA': 'Serine',
      'UCG': 'Serine',
      'UAU': 'Tyrosine',
      'UAC': 'Tyrosine',
      'UGU': 'Cysteine',
      'UGC': 'Cysteine',
      'UGG': 'Tryptophan',
    }

    stop_codon = {'UAA', 'UAG', 'UGA'}
    sequence = []

    for x in range(0, len(strand), 3):
        codon = strand[x : x + 3]

        if codon in stop_codon:
            break
        if codon in codon_map:
            sequence.append(codon_map[codon])
      
    return sequence
    
